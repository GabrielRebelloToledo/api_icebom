CREATE FUNCTION ajusta_data(data_input DATETIME)
RETURNS VARCHAR(19)
DETERMINISTIC
BEGIN
    DECLARE data_formatada VARCHAR(19);

    IF data_input IS NULL THEN
        RETURN NULL;
    END IF;

    SET data_formatada = DATE_FORMAT(data_input, '%d/%m/%Y %H:%i:%s');

    RETURN data_formatada;
END;



CREATE FUNCTION ajusta_status(status_in VARCHAR(50))
RETURNS VARCHAR(100)
DETERMINISTIC
BEGIN
    DECLARE status_string VARCHAR(100);

    IF status_in IS NULL THEN
        RETURN NULL;
    END IF;

    SELECT status INTO status_string FROM status WHERE id = status_in LIMIT 1;

    RETURN status_string;
END;


CREATE OR REPLACE FUNCTION ajusta_check(check_in VARCHAR(50))
RETURNS VARCHAR(100)
DETERMINISTIC
BEGIN
    DECLARE check_string VARCHAR(100);

    IF check_in IS NULL THEN
        RETURN NULL;

    ELSEIF check_in = '1' THEN 
        RETURN 'Sim';

    ELSEIF check_in = '0' THEN 
        RETURN 'Não';

    ELSE
        RETURN check_in;

    END IF;
END;


