package br.com.fiap.projetopidgeotour.destinos.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Entity
@Table(name = "destinos")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Destinos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Positive
    private BigDecimal valor;

    @Size(max=100)
    private String nome;

    @Size(max=100)
    private String descricao;

    @Size(max=100)
    private String duracao;

    @Size(max=100)
    private String pontos;

}
