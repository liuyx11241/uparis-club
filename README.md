# uparis-club
## BACK END
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

### JPA naming strategy
* spring.jpa.hibernate.naming.implicit-strategy= # Hibernate 5 implicit naming strategy fully qualified name.
    1. 第一：org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl效果等同于hibernate4中的DefaultNamingStrategy这个直接映射，不会做过多的处理（前提没有设置@Table，@Column等属性的时候）。如果有@Column则以@Column为准
    1. 第二：org.springframework.boot.orm.jpa.hibernate.SpringPhysicalNamingStrategy效果等同于hibernate4中的ImprovedNamingStrategy 表名，字段为小写，当有大写字母的时候会转换为分隔符号“_”。
* spring.jpa.hibernate.naming.physical-strategy= # Hibernate 5 physical naming strategy fully qualified name.
    1. 第一：org.hibernate.boot.model.naming.ImplicitNamingStrategyJpaCompliantImp外键关联字段由关联对象的主键相对路径构成，例如关联对象User的主键为id，则此策略下，将User作为外键的表使用User_id作为列名。
    2. 第二：org.hibernate.boot.model.naming.ImplicitNamingStrategyLegacyHbmImpl外键关联字段不拆分，即上例中直接用User做为列名
    3. 第三：org.hibernate.boot.model.naming.ImplicitNamingStrategyComponentPathImpl等同1

### ddl-auto
* **none** This is the default for MySQL, no change to the database structure.
* **update** Hibernate changes the database according to the given Entity structures.
* **create** Creates the database every time, but don’t drop it when close.
* **create-drop** Creates the database then drops it when the SessionFactory closes.

We here begin with create because we don’t have the database structure yet. After the first run, we could switch it to update or none according to program requirements. Use update when you want to make some change to the database structure.

## FRONT END

### install angular material
#### 1. npm install angular-material & hammerjs
> npm install --save @angular/material @angular/animations @angular/cdk
> npm install --save hammerjs

Hammer.js is an optional dependency and helps with touch support for a few of the components.

#### 2. Modify angular.json
>"scripts": [
>   "../node_modules/hammerjs/hammer.min.js"
> ],

#### 3. Import a pre-built theme and Material icons into styles.css
> @import '~@angular/material/prebuilt-themes/indigo-pink.css';


#### 4. Localize Mat Icons
Install material icons
> npm install material-design-icons --save

Insert into styles.css
> import materialIcons from 'material-design-icons/iconfont/material-icons.css'
