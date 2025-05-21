export function getConsulta() {
  return `
    

SELECT 

pa.idProcess,

-- Recebimento
MAX(CASE WHEN label = 'Recebimento de NF' THEN pa.idStep ELSE '' COLLATE utf8mb4_bin END) AS idStepRec,
MAX(CASE WHEN label = 'Recebimento de NF' THEN pa.idProcess ELSE '' COLLATE utf8mb4_bin END) AS idProcessRec,

MAX(CASE WHEN label = 'Recebimento de NF' THEN ajusta_data(pa.data) ELSE '' COLLATE utf8mb4_bin END) AS datarec,
MAX(CASE WHEN label = 'Recebimento de NF' THEN pa.nronf ELSE '' COLLATE utf8mb4_bin END) AS nronfrec,
MAX(CASE WHEN label = 'Recebimento de NF' THEN ajusta_status(pa.status) ELSE '' COLLATE utf8mb4_bin END) AS statusrec,

MAX(CASE WHEN label = 'Recebimento de NF' THEN pa.file1 ELSE '' COLLATE utf8mb4_bin END) AS file1rec,
MAX(CASE WHEN label = 'Recebimento de NF' THEN pa.file2 ELSE '' COLLATE utf8mb4_bin END) AS file2rec,
MAX(CASE WHEN label = 'Recebimento de NF' THEN pa.file3 ELSE '' COLLATE utf8mb4_bin END) AS file3rec,
MAX(CASE WHEN label = 'Recebimento de NF' THEN pa.file4 ELSE '' COLLATE utf8mb4_bin END) AS file4rec,
MAX(CASE WHEN label = 'Recebimento de NF' THEN pa.file5 ELSE '' COLLATE utf8mb4_bin END) AS file5rec,
MAX(CASE WHEN label = 'Recebimento de NF' THEN pa.file6 ELSE '' COLLATE utf8mb4_bin END) AS file6rec,

-- Conferência NF x MP
MAX(CASE WHEN label = 'Conferência NF x MP' THEN pa.idStep ELSE '' COLLATE utf8mb4_bin END) AS idStepConfNF,
MAX(CASE WHEN label = 'Conferência NF x MP' THEN pa.idProcess ELSE '' COLLATE utf8mb4_bin END) AS idProcessConfNF, 
MAX(CASE WHEN label = 'Recebimento de NF' THEN ajusta_status(pa.status) ELSE '' COLLATE utf8mb4_bin END) AS statusConfNF,
MAX(CASE WHEN label = 'Recebimento de NF' THEN ajusta_check(pa.iteconforme) ELSE '' COLLATE utf8mb4_bin END) AS iteconformeConfNF,
MAX(CASE WHEN label = 'Recebimento de NF' THEN ajusta_check(pa.diverconf) ELSE '' COLLATE utf8mb4_bin END) AS diverconfConfNF,
MAX(CASE WHEN label = 'Recebimento de NF' THEN pa.obsconf ELSE '' COLLATE utf8mb4_bin END) AS obsconfConfNF,
MAX(CASE WHEN label = 'Recebimento de NF' THEN ajusta_data(pa.data) ELSE '' COLLATE utf8mb4_bin END) AS dataConfNF,
MAX(CASE WHEN label = 'Recebimento de NF' THEN pa.qtdpallets ELSE '' COLLATE utf8mb4_bin END) AS qtdpalletsConfNF,
MAX(CASE WHEN label = 'Conferência NF x MP' THEN pa.file1 ELSE '' COLLATE utf8mb4_bin END) AS file1ConfNF,
MAX(CASE WHEN label = 'Conferência NF x MP' THEN pa.file2 ELSE '' COLLATE utf8mb4_bin END) AS file2ConfNF,
MAX(CASE WHEN label = 'Conferência NF x MP' THEN pa.file3 ELSE '' COLLATE utf8mb4_bin END) AS file3ConfNF,
MAX(CASE WHEN label = 'Conferência NF x MP' THEN pa.file4 ELSE '' COLLATE utf8mb4_bin END) AS file4ConfNF,
MAX(CASE WHEN label = 'Conferência NF x MP' THEN pa.file5 ELSE '' COLLATE utf8mb4_bin END) AS file5ConfNF,
MAX(CASE WHEN label = 'Conferência NF x MP' THEN pa.file6 ELSE '' COLLATE utf8mb4_bin END) AS file6ConfNF,


-- Puxada de MP
MAX(CASE WHEN label = 'Puxada de MP' THEN pa.idStep ELSE '' COLLATE utf8mb4_bin END) AS idStepPMP,
MAX(CASE WHEN label = 'Puxada de MP' THEN pa.idProcess ELSE '' COLLATE utf8mb4_bin END) AS idProcessPMP,
MAX(CASE WHEN label = 'Puxada de MP' THEN ajusta_data(pa.data) ELSE '' COLLATE utf8mb4_bin END) AS dataPMP,
MAX(CASE WHEN label = 'Puxada de MP' THEN ajusta_status(pa.status) ELSE '' COLLATE utf8mb4_bin END) AS statusPMP,
MAX(CASE WHEN label = 'Puxada de MP' THEN pa.qtdpallets ELSE '' COLLATE utf8mb4_bin END) AS qtdpalletsPMP,
MAX(CASE WHEN label = 'Puxada de MP' THEN pa.obsconf ELSE '' COLLATE utf8mb4_bin END) AS obsconfPMP,
MAX(CASE WHEN label = 'Puxada de MP' THEN pa.file1 ELSE '' COLLATE utf8mb4_bin END) AS file1PMP,
MAX(CASE WHEN label = 'Puxada de MP' THEN pa.file2 ELSE '' COLLATE utf8mb4_bin END) AS file2PMP,
MAX(CASE WHEN label = 'Puxada de MP' THEN pa.file3 ELSE '' COLLATE utf8mb4_bin END) AS file3PMP,
MAX(CASE WHEN label = 'Puxada de MP' THEN pa.file4 ELSE '' COLLATE utf8mb4_bin END) AS file4PMP,
MAX(CASE WHEN label = 'Puxada de MP' THEN pa.file5 ELSE '' COLLATE utf8mb4_bin END) AS file5PMP,
MAX(CASE WHEN label = 'Puxada de MP' THEN pa.file6 ELSE '' COLLATE utf8mb4_bin END) AS file6PMP,





-- Produção
MAX(CASE WHEN label = 'Produção' THEN pa.idStep ELSE '' COLLATE utf8mb4_bin END) AS idStepProd,
MAX(CASE WHEN label = 'Produção' THEN pa.idProcess ELSE '' COLLATE utf8mb4_bin END) AS idProcessProd,
MAX(CASE WHEN label = 'Produção' THEN ajusta_check(pa.checkrec) ELSE '' COLLATE utf8mb4_bin END) AS checkrecProd,
MAX(CASE WHEN label = 'Produção' THEN pa.obsrec ELSE '' COLLATE utf8mb4_bin END) AS obsrecProd,
MAX(CASE WHEN label = 'Produção' THEN ajusta_data(pa.datarec) ELSE '' COLLATE utf8mb4_bin END) AS datarecProd,
MAX(CASE WHEN label = 'Produção' THEN ajusta_check(pa.checkpast) ELSE '' COLLATE utf8mb4_bin END) AS checkpastProd,
MAX(CASE WHEN label = 'Produção' THEN pa.obspast ELSE '' COLLATE utf8mb4_bin END) AS obspastProd,
MAX(CASE WHEN label = 'Produção' THEN ajusta_data(pa.datapast) ELSE '' COLLATE utf8mb4_bin END) AS datapastProd,
MAX(CASE WHEN label = 'Produção' THEN ajusta_check(pa.checkmat) ELSE '' COLLATE utf8mb4_bin END) AS checkmatProd,
MAX(CASE WHEN label = 'Produção' THEN pa.qtdpallets ELSE '' COLLATE utf8mb4_bin END) AS qtdpalletsProd,
MAX(CASE WHEN label = 'Produção' THEN pa.obsmat ELSE '' COLLATE utf8mb4_bin END) AS obsmatProd,
MAX(CASE WHEN label = 'Produção' THEN ajusta_data(pa.datamat) ELSE '' COLLATE utf8mb4_bin END) AS datamatProd,
MAX(CASE WHEN label = 'Produção' THEN ajusta_check(pa.checkenv) ELSE '' COLLATE utf8mb4_bin END) AS checkenvProd,
MAX(CASE WHEN label = 'Produção' THEN pa.obsenv ELSE '' COLLATE utf8mb4_bin END) AS obsenvProd,
MAX(CASE WHEN label = 'Produção' THEN ajusta_data(pa.dataenv) ELSE '' COLLATE utf8mb4_bin END) AS dataenvProd,
MAX(CASE WHEN label = 'Produção' THEN ajusta_check(pa.checkapont) ELSE '' COLLATE utf8mb4_bin END) AS checkapontProd,
MAX(CASE WHEN label = 'Produção' THEN pa.obsapont ELSE '' COLLATE utf8mb4_bin END) AS obsapontProd,
MAX(CASE WHEN label = 'Produção' THEN ajusta_data(pa.dataapont) ELSE '' COLLATE utf8mb4_bin END) AS dataapontProd,
MAX(CASE WHEN label = 'Produção' THEN ajusta_check(pa.checklib) ELSE '' COLLATE utf8mb4_bin END) AS checklibProd,
MAX(CASE WHEN label = 'Produção' THEN pa.obslib ELSE '' COLLATE utf8mb4_bin END) AS obslibProd,
MAX(CASE WHEN label = 'Produção' THEN ajusta_status(pa.status) ELSE '' COLLATE utf8mb4_bin END) AS statusProd,
MAX(CASE WHEN label = 'Produção' THEN pa.file1 ELSE '' COLLATE utf8mb4_bin END) AS file1Prod,
MAX(CASE WHEN label = 'Produção' THEN pa.file2 ELSE '' COLLATE utf8mb4_bin END) AS file2Prod,
MAX(CASE WHEN label = 'Produção' THEN pa.file3 ELSE '' COLLATE utf8mb4_bin END) AS file3Prod,
MAX(CASE WHEN label = 'Produção' THEN pa.file4 ELSE '' COLLATE utf8mb4_bin END) AS file4Prod,
MAX(CASE WHEN label = 'Produção' THEN pa.file5 ELSE '' COLLATE utf8mb4_bin END) AS file5Prod,
MAX(CASE WHEN label = 'Produção' THEN pa.file6 ELSE '' COLLATE utf8mb4_bin END) AS file6Prod,

-- Conferência fim de produção
MAX(CASE WHEN label = 'Conferência fim de produção' THEN pa.idStep ELSE '' COLLATE utf8mb4_bin END) AS idStepConfp,
MAX(CASE WHEN label = 'Conferência fim de produção' THEN pa.idProcess ELSE '' COLLATE utf8mb4_bin END) AS idProcessConfp,

MAX(CASE WHEN label = 'Conferência fim de produção' THEN pa.infoprod ELSE '' COLLATE utf8mb4_bin END) AS infoprodConfp,
MAX(CASE WHEN label = 'Conferência fim de produção' THEN ajusta_status(pa.status) ELSE '' COLLATE utf8mb4_bin END) AS statusConfp,

MAX(CASE WHEN label = 'Conferência fim de produção' THEN pa.file1 ELSE '' COLLATE utf8mb4_bin END) AS file1Confp,
MAX(CASE WHEN label = 'Conferência fim de produção' THEN pa.file2 ELSE '' COLLATE utf8mb4_bin END) AS file2Confp,
MAX(CASE WHEN label = 'Conferência fim de produção' THEN pa.file3 ELSE '' COLLATE utf8mb4_bin END) AS file3Confp,
MAX(CASE WHEN label = 'Conferência fim de produção' THEN pa.file4 ELSE '' COLLATE utf8mb4_bin END) AS file4Confp,
MAX(CASE WHEN label = 'Conferência fim de produção' THEN pa.file5 ELSE '' COLLATE utf8mb4_bin END) AS file5Confp,
MAX(CASE WHEN label = 'Conferência fim de produção' THEN pa.file6 ELSE '' COLLATE utf8mb4_bin END) AS file6Confp,


-- Emissão de NFs

MAX(CASE WHEN label = 'Emissão de NFs' THEN pa.idStep ELSE '' COLLATE utf8mb4_bin END) AS idStepENF,
MAX(CASE WHEN label = 'Emissão de NFs' THEN pa.idProcess ELSE '' COLLATE utf8mb4_bin END) AS idProcessENF,

MAX(CASE WHEN label = 'Emissão de NFs' THEN pa.infonfs ELSE '' COLLATE utf8mb4_bin END) AS infonfsENF,
MAX(CASE WHEN label = 'Emissão de NFs' THEN pa.status ELSE '' COLLATE utf8mb4_bin END) AS statusENF,

MAX(CASE WHEN label = 'Emissão de NFs' THEN pa.file1 ELSE '' COLLATE utf8mb4_bin END) AS file1ENF,
MAX(CASE WHEN label = 'Emissão de NFs' THEN pa.file2 ELSE '' COLLATE utf8mb4_bin END) AS file2ENF,
MAX(CASE WHEN label = 'Emissão de NFs' THEN pa.file3 ELSE '' COLLATE utf8mb4_bin END) AS file3ENF,
MAX(CASE WHEN label = 'Emissão de NFs' THEN pa.file4 ELSE '' COLLATE utf8mb4_bin END) AS file4ENF,
MAX(CASE WHEN label = 'Emissão de NFs' THEN pa.file5 ELSE '' COLLATE utf8mb4_bin END) AS file5ENF,
MAX(CASE WHEN label = 'Emissão de NFs' THEN pa.file6 ELSE '' COLLATE utf8mb4_bin END) AS file6ENF,

-- Devolução de MP
MAX(CASE WHEN label = 'Devolução de MP' THEN pa.idStep ELSE '' COLLATE utf8mb4_bin END) AS idStepENF,
MAX(CASE WHEN label = 'Devolução de MP' THEN pa.idProcess ELSE '' COLLATE utf8mb4_bin END) AS idProcessENF,

MAX(CASE WHEN label = 'Devolução de MP' THEN pa.infonfs ELSE '' COLLATE utf8mb4_bin END) AS infonfsENF,
MAX(CASE WHEN label = 'Devolução de MP' THEN ajusta_status(pa.status) ELSE '' COLLATE utf8mb4_bin END) AS statusENF,

MAX(CASE WHEN label = 'Devolução de MP' THEN pa.file1 ELSE '' COLLATE utf8mb4_bin END) AS file1ENF,
MAX(CASE WHEN label = 'Devolução de MP' THEN pa.file2 ELSE '' COLLATE utf8mb4_bin END) AS file2ENF,
MAX(CASE WHEN label = 'Devolução de MP' THEN pa.file3 ELSE '' COLLATE utf8mb4_bin END) AS file3ENF,
MAX(CASE WHEN label = 'Devolução de MP' THEN pa.file4 ELSE '' COLLATE utf8mb4_bin END) AS file4ENF,
MAX(CASE WHEN label = 'Devolução de MP' THEN pa.file5 ELSE '' COLLATE utf8mb4_bin END) AS file5ENF,
MAX(CASE WHEN label = 'Devolução de MP' THEN pa.file6 ELSE '' COLLATE utf8mb4_bin END) AS file6ENF

from process_activity pa 
inner join steps_process sp on pa.idStep  = sp.id and pa.idProcess = sp.idProcess

where pa.idProcess =  ?
  `;
}