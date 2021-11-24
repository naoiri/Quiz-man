package se.yrgo.quizman.quizman;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

@SpringBootApplication
public class QuizmanApplication implements CommandLineRunner {
	@Autowired
	private JdbcTemplate jdbcTemplate;

	public static void main(String[] args) {
		SpringApplication.run(QuizmanApplication.class, args);
	}
	//(())
	public void run(String ... args) {
		String sql = ("SELCECT * FROM palyers");
		List<User> players = jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(User.class));
		players.forEach(System.out :: println);

}

}
