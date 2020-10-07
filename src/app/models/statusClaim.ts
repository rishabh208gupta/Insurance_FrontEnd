import{Status} from './Status';
export class StatusClaim{
    claimId:number;
    statusMessage:string;
    status:boolean;
}


export class UserClaim{
    claimId:number;
    claimed:boolean;
    claimAmount:number;
}
export class RenewStatus extends Status{
    policyNo:number;
    amount:number;

}