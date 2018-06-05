# uparis-club

##BACK END
### application.properties
在Spring Boot中多环境配置文件名需要满足application-{profile}.properties的格式，其中{profile}对应你的环境标识，比如：
* application-dev.properties：开发环境
* application-test.properties：测试环境
* application-prod.properties：生产环境

至于哪个具体的配置文件会被加载，需要在application.properties文件中通过spring.profiles.active属性来设置，其值对应{profile}值。

如：spring.profiles.active=test就会加载application-test.properties配置文件内容

-Dspring.profiles.active=test

### Srping Security
* 通过@EnableWebSecurity注解开启Spring Security的功能
* 继承WebSecurityConfigurerAdapter，并重写它的方法来设置一些web安全的细节 
* configure(HttpSecurity http)方法
    * 通过authorizeRequests()定义哪些URL需要被保护、哪些不需要被保护。例如以上代码指定了/和/home不需要任何认证就可以访问，其他的路径都必须通过身份验证。
    * 通过formLogin()定义当需要用户登录时候，转到的登录页面。
* configureGlobal(AuthenticationManagerBuilder auth)方法，在内存中创建了一个用户，该用户的名称为user，密码为password，用户角色为USER。

##FRONT END