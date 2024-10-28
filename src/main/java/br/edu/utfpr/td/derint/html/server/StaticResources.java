package br.edu.utfpr.td.derint.html.server;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;

import javax.inject.Inject;
import javax.servlet.ServletContext;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.springframework.stereotype.Component;

@Component
@Path("/")
public class StaticResources {

	@Inject
	ServletContext context;
		
	@GET
	@Path("/{path:.*}")
	public Response loadResource(@PathParam("path") String resourcePath) {
		if(resourcePath.isBlank() || resourcePath.equals("/")) {
			return Response.ok(carregarArquivo("index.html")).build();
		}
		File arquivo = carregarArquivo(resourcePath);
		if (resourcePath.endsWith(".js")) {
			return Response.ok(arquivo).type("text/javascript").build();
		}
		if (resourcePath.endsWith(".jpg")) {			
			return Response.ok(arquivo).type("image/jpeg").build();
		}
		return Response.ok(arquivo).build();
	}
	
	private File carregarArquivo(String resourcePath) {
		File file = null;
		String caminhoArquivo = "web/" + resourcePath;
		file = new File(caminhoArquivo);
		return file;
	}
}