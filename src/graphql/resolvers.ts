import prisma from "../../lib/prisma";
export const resolvers = {
    Query:{
        ReadInventory:async(_parent:any,_args:any) =>{
            return await prisma.inventory.findMany();
        }
    },
    Mutation:{
        CreateInventory:async(_parent:any,args:any) =>{
            try {
                console.log(args.CreateInventoryInput);
                const result = await prisma.inventory.create({
                    data:args.CreateInventoryInput[0]
                })
                if(result){
                    return {
                        "statusText":"Successful!" 
                    }
                }else{
                    return {
                        "statusText":"Ops something went wrong!" 
                    }                    
                }

            } catch (error) {
                console.log(error);
            }
        }
    }
}