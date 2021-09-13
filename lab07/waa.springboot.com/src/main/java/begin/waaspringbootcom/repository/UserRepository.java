package begin.waaspringbootcom.repository;

import begin.waaspringbootcom.domain.Post;
import begin.waaspringbootcom.domain.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    public List<User> findAll();
    public boolean existsById(Long id);
    public Optional<User> findById(Long id);

    @Query("Select u.posts from User u where u.id = :id")
    List<Post> getPosts(@Param("id") long id);

    @Query("Select u from User u where u.posts.size>:num")
    public List<User>  getUserPostMoreThan(@Param("num") int n);
    @Query("SELECT u FROM User u WHERE u.username = ?1")
    Optional<User> findByUsername(@Param("username") String username);

}
