import { createLogger, format, transports } from "winston";

export const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.simple(),
        format.timestamp(),
        format.printf(info=> `${info.timestamp} ${info.level} : ${info.message}`)
    ),
    transports: [
    new transports.File({
    maxsize: 5120000,
    
    maxFiles: 5,
    filename: `&{_dirname}/../logger/logerror`
    }),
    new transports.Console({
    level:'debug'
    })
    
    
    ]
    });
