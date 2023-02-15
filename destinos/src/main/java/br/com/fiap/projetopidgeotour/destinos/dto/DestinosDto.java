package br.com.fiap.projetopidgeotour.destinos.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class DestinosDto {

    private Long id;
    private BigDecimal valor;
    private String nome;
    private String descricao;
    private String duracao;
    private String pontos;
}

