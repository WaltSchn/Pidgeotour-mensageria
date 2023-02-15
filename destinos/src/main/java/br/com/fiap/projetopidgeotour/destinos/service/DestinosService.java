package br.com.fiap.projetopidgeotour.destinos.service;

import br.com.fiap.projetopidgeotour.destinos.dto.DestinosDto;
import br.com.fiap.projetopidgeotour.destinos.model.Destinos;
import br.com.fiap.projetopidgeotour.destinos.repository.DestinosRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;

import org.modelmapper.ModelMapper;

import java.util.List;

@Service
public class DestinosService {

    @Autowired
    private DestinosRepository repository;

    @Autowired
    private ModelMapper modelMapper;

public List<DestinosDto> listarTodos() {
    List<Destinos> destinos = repository.findAll();
    return destinos.stream().map(p -> modelMapper.map(p, DestinosDto.class)).collect(Collectors.toList());
}

    public DestinosDto obterPorId(Long id) {
        Destinos destinos = repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException());
        return modelMapper.map(destinos, DestinosDto.class);
    }

}
