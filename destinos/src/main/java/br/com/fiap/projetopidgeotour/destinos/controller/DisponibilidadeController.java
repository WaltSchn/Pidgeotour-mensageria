package br.com.fiap.projetopidgeotour.destinos.controller;


import br.com.fiap.projetopidgeotour.destinos.dto.DisponibilidadeDto;
import br.com.fiap.projetopidgeotour.destinos.service.DisponibilidadeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/disponibilidade")
@CrossOrigin(origins = {"https://pidgeotour.azurewebsites.net", "http://191.232.72.231", "http://localhost:4200/"})
public class DisponibilidadeController {


    @Autowired
    private DisponibilidadeService service;

    @GetMapping()
    public ResponseEntity <List<DisponibilidadeDto>> listarTodosD() {
        return ResponseEntity.ok(service.listarTodosD());
    }

    @GetMapping(value = "/{id}/{qtde}")
    public ResponseEntity <List<DisponibilidadeDto>> obterDisponibilidade(
            @PathVariable("id") Long id, @PathVariable("qtde") Long qtde)
            {

        return ResponseEntity.ok(service.obterDisponibilidade(id, qtde));
    }

}
