package br.com.fiap.projetopidgeotour.destinos.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "disponibilidade")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class Disponibilidade {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Size(max=100)
    private String nome;
    @Size(max=100)
    private String data;
    @NotNull
    @Positive
    private Long vagas;
    @NotNull
    @Positive
    @Column(name = "destino_id")
    private Long destinoId;
}
