package br.com.fiap.pidgeotour.mensageria.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import br.com.fiap.pidgeotour.mensageria.service.Producer;


@RestController
@RequestMapping("/mensageria")
@CrossOrigin(origins = {"https://pidgeotour.azurewebsites.net", "http://191.232.72.231", "http://localhost:4200/"})
public class Controller {

	@Autowired
	Producer producer;

	@GetMapping("/producerMsg")
	@ResponseStatus(code = HttpStatus.OK, reason = "OK")
	public void getMessage(@RequestParam("message") String message) {
		producer.sendMsgTopic(message);
	}

}
