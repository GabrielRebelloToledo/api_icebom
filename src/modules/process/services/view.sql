CREATE OR REPLACE VIEW  processoresumo AS 
SELECT 
    ste.idProcess AS idprocess,
    ste.label AS label,
    st.status AS status,
    pr.datapast AS datapast,
    pr.dataenvase AS dataenvase,
    p.id AS id,
    p.name AS name,
    IFNULL(pr.qtdcalda, 0) AS qtdcalda,
    IFNULL(pr.qtdcaixas, 0) AS qtdcaixas,
    IFNULL(pr.qtdunidades, 0) AS qtdunidades,
    t.descrtype AS descrtype
FROM steps_process ste
JOIN status st ON ste.status = st.id
JOIN process pr ON ste.idProcess = pr.id
JOIN products p ON pr.projeto = p.id
JOIN type t ON pr.idtype = t.id
WHERE 
    ste.orderby = (
        SELECT MIN(s2.orderby)
        FROM steps_process s2
        WHERE s2.idProcess = ste.idProcess
          AND s2.status <> 3
    )
    AND pr.statusProcess = 'A'
     AND pr.onlyprocessresum = 'S'
UNION ALL

-- Segundo SELECT
SELECT 
    ste.idProcess AS idprocess,
    ste.label AS label,
    st.status AS status,
    pr.datapast AS datapast,
    pr.dataenvase AS dataenvase,
    p.id AS id,
    p.name AS name,
    IFNULL(pr.qtdcalda, 0) AS qtdcalda,
    IFNULL(pr.qtdcaixas, 0) AS qtdcaixas,
    IFNULL(pr.qtdunidades, 0) AS qtdunidades,
    t.descrtype AS descrtype
FROM steps_process ste
JOIN status st ON ste.status = st.id
JOIN process pr ON ste.idProcess = pr.id
JOIN products p ON pr.projeto = p.id
JOIN type t ON pr.idtype = t.id
WHERE 
    ste.orderby = (
        SELECT MAX(s2.orderby)
        FROM steps_process s2
        WHERE s2.idProcess = ste.idProcess
    )
    AND NOT EXISTS (
        SELECT 1
        FROM steps_process s3
        WHERE s3.idProcess = ste.idProcess
          AND s3.status <> 3
        LIMIT 1
    )
    AND pr.statusProcess = 'A'
     AND pr.onlyprocessresum = 'S'

ORDER BY idprocess;




CREATE OR REPLACE VIEW processoresumosoma AS 
SELECT 
    dados.descrtype AS descrtype,
    SUM(dados.qtdcalda) AS total_qtdcalda,
    SUM(dados.qtdcaixas) AS total_qtdcaixas,
    SUM(dados.qtdunidades) AS total_qtdunidades
FROM (
    -- Primeira parte do UNION: processos ativos com etapa inicial
    SELECT 
        ste.idProcess AS idprocess,
        ste.label AS label,
        st.status AS status,
        pr.datapast AS datapast,
        pr.dataenvase AS dataenvase,
        p.id AS product_id,
        p.name AS product_name,
        IFNULL(pr.qtdcalda, 0) AS qtdcalda,
        IFNULL(pr.qtdcaixas, 0) AS qtdcaixas,
    	IFNULL(pr.qtdunidades, 0) AS qtdunidades,
        t.descrtype AS descrtype
    FROM steps_process ste
    JOIN status st ON ste.status = st.id
    JOIN process pr ON ste.idProcess = pr.id
    JOIN products p ON pr.projeto = p.id
    JOIN type t ON pr.idtype = t.id
    WHERE 
        ste.orderby = (
            SELECT MIN(s2.orderby)
            FROM steps_process s2
            WHERE s2.idProcess = ste.idProcess
              AND s2.status <> 3
        )
        AND pr.statusProcess = 'A'
        AND pr.onlyprocessresum = 'S'

    UNION ALL

    -- Segunda parte do UNION: processos finalizados
    SELECT 
        ste.idProcess AS idprocess,
        ste.label AS label,
        st.status AS status,
        pr.datapast AS datapast,
        pr.dataenvase AS dataenvase,
        p.id AS product_id,
        p.name AS product_name,
        IFNULL(pr.qtdcalda, 0) AS qtdcalda,
        IFNULL(pr.qtdcaixas, 0) AS qtdcaixas,
    	IFNULL(pr.qtdunidades, 0) AS qtdunidades,
        t.descrtype AS descrtype
    FROM steps_process ste
    JOIN status st ON ste.status = st.id
    JOIN process pr ON ste.idProcess = pr.id
    JOIN products p ON pr.projeto = p.id
    JOIN type t ON pr.idtype = t.id
    WHERE 
        ste.orderby = (
            SELECT MAX(s2.orderby)
            FROM steps_process s2
            WHERE s2.idProcess = ste.idProcess
        )
        AND NOT EXISTS (
            SELECT 1
            FROM steps_process s3
            WHERE s3.idProcess = ste.idProcess
              AND s3.status <> 3
            LIMIT 1
        )
        AND pr.statusProcess = 'A'
         AND pr.onlyprocessresum = 'S'
) dados
GROUP BY dados.descrtype
ORDER BY dados.descrtype;
