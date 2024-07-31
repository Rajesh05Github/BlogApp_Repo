import conf from  "../config/conf.js"
import { Client,Account,ID } from "appwrite"

class AuthorService{
        client=new Client();
        account
        constructor(){
            this.client.setEndpoint(conf.appwriteUrl)
            this.client.setProject(conf.appwriteProjectId);
            this.account= new Account(this.client)
        }

        async createAccount({email,password,name}){
            try {
                 const userAccount=await this.account.create(ID.unique(),email,password,name);
                 if(userAccount){
                     return this.login({email,password})
                 }
                 else{
                    return userAccount;
                 }
            }
            catch(error){
                throw error
            }}

        async login({email,password}){
            try{
            return await this.account.createEmailPasswordSession(email,password)
               }
            catch(error)
            {
                throw error
            }
        }
        async currentUser()
        {
            try{
                return await this.account.get();
            }
            catch(error){
                console.log("There is error::CurrenUser::error",error)
            }
            return null
        }
        async logOut(){
            try{
                  await this.account.deleteSessions()
            }
            catch(error)
            {
                console.log("There is error to logout::error",error)
            }
        }
}

export const authService= new AuthorService();

