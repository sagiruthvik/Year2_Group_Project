package com.example.MealsOnWheels.AccessingDataMySQL.security.config;

import com.example.MealsOnWheels.AccessingDataMySQL.appuser.UserPermission;
import com.example.MealsOnWheels.AccessingDataMySQL.appuser.UserRoles;
import com.example.MealsOnWheels.AccessingDataMySQL.appuser.UserServices;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

import static com.example.MealsOnWheels.AccessingDataMySQL.appuser.UserPermission.*;
import static com.example.MealsOnWheels.AccessingDataMySQL.appuser.UserRoles.*;

@Configuration
@AllArgsConstructor
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private final UserServices userServices;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        //TODO Config antmatcher to allow permissions based on role. Also enable csrf later during production. Ensure to take X-CSRF-TOKEN.
        http
//                .csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
//                .and()
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/api/signup/**").permitAll()
                .antMatchers("/api/**").hasAnyRole(USER.name(), ADMIN.name())
                .antMatchers(HttpMethod.GET, "/api/**").hasAnyAuthority(USER_READ.getPermission())
                .antMatchers(HttpMethod.GET, "/management/api/**").hasAnyAuthority(ADMIN_WRITE.getPermission())
                .antMatchers(HttpMethod.DELETE, "/management/api/**").hasAnyAuthority(ADMIN_WRITE.getPermission())
                .antMatchers(HttpMethod.PUT, "/management/api/**").hasAnyAuthority(ADMIN_WRITE.getPermission())
                .antMatchers("/management/api/**").hasRole(ADMIN.name())
                .anyRequest()
                .authenticated().and()
                .formLogin();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(daoAuthenticationProvider());
    }

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setPasswordEncoder(bCryptPasswordEncoder);
        provider.setUserDetailsService(userServices);
        return provider;
    }

}
