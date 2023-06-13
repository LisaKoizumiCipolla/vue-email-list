 
 const {createApp} = Vue;

 createApp({
    data(){
        return {
            emailAddresses : [],
            newEmail : "",
        }
    },

    created(){
        for ( let i=0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( (response) => {
                const generatedEmail = response.data;
                console.log(generatedEmail.response);

                this.newEmail = generatedEmail.response;

                this.emailAddresses.push(this.newEmail);
                console.log(this.emailAddresses);
            });
        };
    }
    

 }).mount("#app");