package br.com.fiap.projetopidgeotour.destinos.controller;

import br.com.fiap.projetopidgeotour.destinos.dto.DestinosDto;
import br.com.fiap.projetopidgeotour.destinos.service.DestinosService;
import jakarta.validation.constraints.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/destinos")
@CrossOrigin(origins = {"https://pidgeotour.azurewebsites.net", "http://191.232.72.231", "http://localhost:4200/"})

public class DestinosController {

    @Autowired
    private DestinosService service;


    @GetMapping()
    public ResponseEntity <List<DestinosDto>> listarTodos() {
        return ResponseEntity.ok(service.listarTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<DestinosDto> obterPorId(@PathVariable @NotNull Long id) {
        DestinosDto dto = service.obterPorId(id);
        return ResponseEntity.ok(dto);
    }

}
