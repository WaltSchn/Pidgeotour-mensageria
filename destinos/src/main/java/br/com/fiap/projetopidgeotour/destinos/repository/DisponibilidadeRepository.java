package br.com.fiap.projetopidgeotour.destinos.repository;

import br.com.fiap.projetopidgeotour.destinos.model.Disponibilidade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface DisponibilidadeRepository extends JpaRepository<Disponibilidade, Long> {

    List<Disponibilidade> findByDestinoIdEqualsAndVagasGreaterThanEqual(
            @PathVariable("id") Long id, @PathVariable("qtde") Long qtde);


}