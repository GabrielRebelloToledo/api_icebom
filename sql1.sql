SELECT 
            FOL.CODEMP,
            FOL.CODFUNC,
            FOL.CODEVENTO,
            FOL.VLREVENTO,
            FOL.TIPEVENTO,
            FOL.OBS,
            EVE.DESCREVENTO
        FROM TFPFOL FOL, TFPEVE EVE
        WHERE     
            FOL.CODEMP = 1
            AND FOL.CODFUNC = 6202
            AND FOL.REFERENCIA = '01/02/2025'
            AND FOL.TIPEVENTO = 0
			AND FOL.TIPFOLHA = 'N'
            AND ((FOL.TIPFOLHA IN ('N', 'P', 'R', 'L')
            AND EVE.IMPHOLLERIT IN ('M', 'S'))
            OR (FOL.TIPFOLHA = 'F'
            AND EVE.IMPHOLLERIT IN ('F', 'S'))
            OR EVE.IMPHOLLERIT = 'S')
            AND FOL.CODEVENTO = EVE.CODEVENTO
			AND NOT EXISTS (SELECT 1 FROM TFPFOLTESTE TESTE WHERE  TESTE.CODEMP = FOL.CODEMP AND TESTE.CODFUNC = FOL.CODFUNC AND TESTE.REFERENCIA = FOL.REFERENCIA AND TESTE.TIPFOLHA = FOL.TIPFOLHA)
	UNION SELECT 
            FOL.CODEMP,
            FOL.CODFUNC,
            FOL.CODEVENTO,
            FOL.VLREVENTO,
            FOL.TIPEVENTO,
            FOL.OBS,
            EVE.DESCREVENTO
        FROM TFPFOLTESTE FOL, TFPEVE EVE
        WHERE     
            FOL.CODEMP = 1
            AND FOL.CODFUNC = 6202
            AND FOL.REFERENCIA = '01/02/2025'
            AND FOL.TIPEVENTO = 0
			AND FOL.TIPFOLHA = 'N'
            AND ((FOL.TIPFOLHA IN ('N', 'P', 'R', 'L')
            AND EVE.IMPHOLLERIT IN ('M', 'S'))
            OR (FOL.TIPFOLHA = 'F'
            AND EVE.IMPHOLLERIT IN ('F', 'S'))
            OR EVE.IMPHOLLERIT = 'S')
            AND FOL.CODEVENTO = EVE.CODEVENTO
			AND NOT EXISTS (SELECT 1 FROM TFPFOL TESTE WHERE  TESTE.CODEMP = FOL.CODEMP AND TESTE.CODFUNC = FOL.CODFUNC AND TESTE.REFERENCIA = FOL.REFERENCIA AND TESTE.TIPFOLHA = FOL.TIPFOLHA)
	UNION SELECT 
            FOL.CODEMP,
            FOL.CODFUNC,
            FOL.CODEVENTO,
            FOL.VLREVENTO,
            FOL.TIPEVENTO,
            FOL.OBS,
            EVE.DESCREVENTO
        FROM TFPFOL FOL, TFPEVE EVE
        WHERE     
            FOL.CODEMP = 1
            AND FOL.CODFUNC = 6202
            AND FOL.REFERENCIA = '01/02/2025'
            AND FOL.TIPEVENTO = 0
			AND FOL.TIPFOLHA = 'N'
            AND ((FOL.TIPFOLHA IN ('N', 'P', 'R', 'L')
            AND EVE.IMPHOLLERIT IN ('M', 'S'))
            OR (FOL.TIPFOLHA = 'F'
            AND EVE.IMPHOLLERIT IN ('F', 'S'))
            OR EVE.IMPHOLLERIT = 'S')
            AND FOL.CODEVENTO = EVE.CODEVENTO
			AND EXISTS (SELECT 1 FROM TFPFOLTESTE TESTE WHERE  TESTE.CODEMP = FOL.CODEMP AND TESTE.CODFUNC = FOL.CODFUNC AND TESTE.REFERENCIA = FOL.REFERENCIA AND TESTE.TIPFOLHA = FOL.TIPFOLHA)