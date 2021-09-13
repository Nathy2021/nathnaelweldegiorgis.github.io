package begin.waaspringbootcom.service;

import begin.waaspringbootcom.domain.Post;
import begin.waaspringbootcom.domain.User;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface UserService {
    public List<User> findAll();
    public void saveUser(User user);
    public Optional<User> findById(Long id);
    public void updateUser(User user, Long id);
    public List<Post> getPostsById(long id);
    public List<User>  getUserPostMoreThan(int n);
//    void save(User user);
//    List<User> getAllUsers();
//    User getUserById(long id);
//    List<Post> getPosts(long id);
//    List<User> getUsersWhoHavePosts();
   // List<User> getAllUsersWithFirstName(String firstName);
   //List<User> findUserByFullName(String firstName, String lastName);



}


