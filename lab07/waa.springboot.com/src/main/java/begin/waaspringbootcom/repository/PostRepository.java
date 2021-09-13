package begin.waaspringbootcom.repository;

import begin.waaspringbootcom.domain.Post;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface PostRepository extends CrudRepository<Post, Integer> {

   public List<Post> findAll();
   public Optional<Post> findById(Integer id);
   public boolean existsById(Integer id);


}
