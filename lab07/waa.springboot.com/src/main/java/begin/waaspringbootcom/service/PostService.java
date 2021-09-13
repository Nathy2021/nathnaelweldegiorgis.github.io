package begin.waaspringbootcom.service;

import begin.waaspringbootcom.domain.Post;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface PostService {
    public List<Post> getAll();
    public Optional<Post> getById(Integer id);
    public void savePost(Post post);
    public void deleteById(Integer id);
    public void updatePost(Post post, Integer id);


}
