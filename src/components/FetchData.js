const URI = 'http://api.holydef.ir/api/v1/category';

export default {
    async fetchUsers() {
        try {
                let response = await fetch(URI);
                let responseJsonData = await response.json();
                return responseJsonData;
            }
        catch(e) {
            console.log(e)
        }
    }
}