package br.edu.utfpr.td.derint.html.server;

import java.io.File;
import java.io.FileNotFoundException;
import java.nio.file.Files;

import javax.inject.Inject;
import javax.servlet.ServletContext;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;

import org.springframework.stereotype.Component;

@Component
@Path("/")
public class StaticResources {

	@Inject
	ServletContext context;

	@GET
	@Path("/{path:.*}")
	public Response loadResource(@PathParam("path") String resourcePath) {
		try {
			if (resourcePath.isBlank() || resourcePath.equals("/")) {
				resourcePath = "index.html";
			}

			File arquivo = carregarArquivo(resourcePath);
			byte[] conteudo = Files.readAllBytes(arquivo.toPath());

			String mime = "text/html";
			if (resourcePath.endsWith(".js")) {
				mime = "text/javascript";
			} else if (resourcePath.endsWith(".jpg")) {
				mime = "image/jpeg";
			} else if (resourcePath.endsWith(".css")) {
				mime = "text/css";
			}

			return Response.ok(conteudo).type(mime).build();

		} catch (Exception e) {
			try {
				// Retorna 404.html
				File erro404 = carregarArquivo("404.html");
				byte[] conteudo404 = Files.readAllBytes(erro404.toPath());
				return Response.status(Response.Status.NOT_FOUND).entity(conteudo404).type("text/html").build();
			} catch (Exception ex) {
				return Response.status(Response.Status.NOT_FOUND).entity("Página não encontrada").type("text/plain").build();
			}
		}
	}

	private File carregarArquivo(String resourcePath) throws FileNotFoundException {
		File file = null;
		String caminhoArquivo = "web/" + resourcePath;
		file = new File(caminhoArquivo);
		return file;
	}
}