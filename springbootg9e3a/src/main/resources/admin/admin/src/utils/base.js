const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootg9e3a/",
            name: "springbootg9e3a",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootg9e3a/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "图书管理系统"
        } 
    }
}
export default base
