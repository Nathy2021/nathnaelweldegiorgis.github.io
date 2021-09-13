package begin.waaspringbootcom.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;



import javax.persistence.*;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Table
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    String name;

    private String username;

    private String password;

    private boolean active;
//    @ManyToMany(cascade = CascadeType.ALL,
//            fetch = FetchType.EAGER)
//    @JoinTable(
//            joinColumns = {
//                    @JoinColumn
//            },
//            inverseJoinColumns = {
//                    @JoinColumn
//            })
//    private List<Role> roles;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "USER_ROLES", joinColumns = {
            @JoinColumn(name = "USER_ID") }, inverseJoinColumns = {
            @JoinColumn(name = "ROLE_ID") })
    private Set<Role> roles;

//    @OneToMany(cascade = CascadeType.ALL ,fetch = FetchType.EAGER)
//    @Fetch(FetchMode.JOIN)
////    @JoinTable(name = "USER_POSTS")
//    @JoinTable(name = "USER_POSTS")
//    List<Post> posts;
    @OneToMany
    @Fetch(FetchMode.JOIN)
    @JoinTable
    List<Post> posts;
}
