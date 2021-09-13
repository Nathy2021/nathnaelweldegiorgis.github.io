package begin.waaspringbootcom.service;

import begin.waaspringbootcom.domain.Post;
import begin.waaspringbootcom.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PostServiceImpl implements PostService{

    PostRepository postRepository;

    @Autowired
    public void setPostRepository(PostRepository postRepository){
        this.postRepository = postRepository;
    }
    @Override
    public List<Post> getAll() {
        return postRepository.findAll();
    }

    @Override
    public Optional<Post> getById(Integer id) {
        return postRepository.findById(id);
    }

    @Override
    public void savePost(Post post) {
        postRepository.save(post);
    }

    @Override
    public void deleteById(Integer id) {

        postRepository.deleteById(id);

    }
    @Override
    public void updatePost(Post post, Integer id) {
        //existsById() method returns boolean
        if(postRepository.existsById(id)){
            post.setId(id);
            postRepository.save(post);
        }
        else{
            postRepository.save(post);
        }


    }
}

