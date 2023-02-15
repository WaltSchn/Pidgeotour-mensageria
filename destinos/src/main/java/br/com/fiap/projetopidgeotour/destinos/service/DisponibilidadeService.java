package br.com.fiap.projetopidgeotour.destinos.service;


import br.com.fiap.projetopidgeotour.destinos.dto.DisponibilidadeDto;
import br.com.fiap.projetopidgeotour.destinos.model.Disponibilidade;
import br.com.fiap.projetopidgeotour.destinos.repository.DisponibilidadeRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DisponibilidadeService {
    @Autowired
    private DisponibilidadeRepository repository;
    @Autowired
    private ModelMapper modelMapper;

    public List<DisponibilidadeDto> listarTodosD() {
        List<Disponibilidade> disponibilidades = repository.findAll();
        return disponibilidades.stream().map(p -> modelMapper.map(p, DisponibilidadeDto.class)).collect(Collectors.toList());
    }

    public List<DisponibilidadeDto> obterDisponibilidade(@PathVariable("id") Long id, @PathVariable("qtde") Long qtde) {
        List<Disponibilidade> disponibilidades = repository.findByDestinoIdEqualsAndVagasGreaterThanEqual(id, qtde);
        return disponibilidades.stream().map(p -> modelMapper.map(p, DisponibilidadeDto.class)).collect(Collectors.toList());
    }
}
