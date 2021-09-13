package begin.waaspringbootcom.service;

import begin.waaspringbootcom.domain.Post;
import begin.waaspringbootcom.domain.User;
import begin.waaspringbootcom.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }
    @Override
    public void saveUser(User user) {
        userRepository.save(user);
    }

    @Override
    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public void updateUser(User user, Long id) {
       if(userRepository.existsById(id)){
            user.setId(id);
            userRepository.save(user);
        }
        else{
            userRepository.save(user);
        }
    }

    @Override
    public List<Post> getPostsById(long id) {
        return userRepository.getPosts(id);
    }

    @Override
    public List<User> getUserPostMoreThan(int number) {
        return userRepository.getUserPostMoreThan(number);
    }

}
