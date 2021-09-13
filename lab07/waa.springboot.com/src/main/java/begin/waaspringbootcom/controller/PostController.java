package begin.waaspringbootcom.controller;


import begin.waaspringbootcom.domain.Post;
import begin.waaspringbootcom.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/posts")
@RestController
public class PostController {

    private PostService postService;
    @Autowired
    public void setPostService(PostService postService){
        this.postService = postService;
    }

    @GetMapping
    public List<Post> getAllPosts(){
        return postService.getAll();
    }

   @PostMapping
    public void savePost(@RequestBody Post post){
        postService.savePost(post);
    }

    @GetMapping("/{id}")
    public Optional<Post> getById(@PathVariable("id") Integer id){
        return postService.getById(id);
    }

    @DeleteMapping("/{id}")
    public void deletePost(@PathVariable("id") Integer id){
        postService.deleteById(id);
    }

    @PutMapping("/{id}")
    public void updatePost(@RequestBody Post post, @PathVariable("id") Integer id){
        postService.updatePost(post, id);
    }

}
