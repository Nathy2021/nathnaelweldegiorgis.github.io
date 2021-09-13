package begin.waaspringbootcom.controller;

import begin.waaspringbootcom.domain.Post;
import begin.waaspringbootcom.domain.User;
import begin.waaspringbootcom.service.PostService;
import begin.waaspringbootcom.service.UserService;
import begin.waaspringbootcom.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private PostService postService;

    @GetMapping
    public List<User> getAll(){
        return userService.findAll();
    }
    @PostMapping
    public void saveUser(@RequestBody User user){
        userService.saveUser(user);
    }
    @GetMapping("/{id}")
    public Optional<User> getById(@PathVariable("id") Long id){
        return userService.findById(id);
    }
    @PutMapping("/{id}")
    public void updateUser(@RequestBody User user, @PathVariable("id") Long id){
        userService.updateUser(user, id);
    }
    @GetMapping("/{id}/posts")
    List<Post> getPosts(@PathVariable("id") long id){
        return userService.getPostsById(id);
    }
    @GetMapping("/getUserPostMoreThan")
    public List<User> getUserPostMoreThan(@RequestParam("number") int number){
        return userService.getUserPostMoreThan(number);
    }
}
