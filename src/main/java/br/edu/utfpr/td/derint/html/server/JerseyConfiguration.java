package br.edu.utfpr.td.derint.html.server;

import javax.ws.rs.ApplicationPath;
 
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.server.spring.scope.RequestContextFilter;
import org.springframework.stereotype.Component;

@Component
@ApplicationPath("/")
public class JerseyConfiguration extends ResourceConfig {
	public JerseyConfiguration() {
		this.register(RequestContextFilter.class);	
		this.register(StaticResources.class);
	}
}
