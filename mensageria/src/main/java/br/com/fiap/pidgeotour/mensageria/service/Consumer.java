package br.com.fiap.pidgeotour.mensageria.service;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class Consumer {

	@KafkaListener(topics = "codeDecode_Topic", groupId = "codeDecode_group")
	public void listenToTopic(String receivedMessage) {
		System.out.println("the message received is: " + receivedMessage);
	}
}
