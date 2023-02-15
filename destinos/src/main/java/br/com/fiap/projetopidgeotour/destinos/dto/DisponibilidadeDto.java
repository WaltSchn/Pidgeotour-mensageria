package br.com.fiap.projetopidgeotour.destinos.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DisponibilidadeDto {
    private Long id;
    private String nome;
    private String data;
    private Long vagas;
    private Long destinoId;
}
