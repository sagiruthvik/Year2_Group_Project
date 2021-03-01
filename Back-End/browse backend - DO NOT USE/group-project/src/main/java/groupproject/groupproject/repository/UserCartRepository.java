package groupproject.groupproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



import groupproject.groupproject.model.UserCart;

@Repository
public interface UserCartRepository extends JpaRepository<UserCart,Long> {

}
