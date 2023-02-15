package br.com.fiap.pidgeotour.mensageria.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class Producer {

	@Autowired
	KafkaTemplate<String, String> kafkaTemplate;
	//kafkatemplate will be used to send the message to the topic
	public void sendMsgTopic(String message) {
		kafkaTemplate.send("codeDecode_Topic", message);
	}
}
