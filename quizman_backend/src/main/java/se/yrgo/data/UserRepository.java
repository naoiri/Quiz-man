package se.yrgo.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import se.yrgo.domain.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
