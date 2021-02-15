package mow.group10.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.sound.midi.Sequence;

@Entity(name = "UserInfo")
@Table(
        name = "user_info")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserInfo {

    @Id
    @SequenceGenerator(
            name = "user_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_sequence"
    )
    @Column(
            name = "user_id",
            updatable = false
    )
    private Long user_id;

    @Column(
            name = "address",
            nullable = true,
            length = 30
    )
    private String address;

    @Column(
            name = "address_2",
            nullable = true,
            length = 15
    )
    private String address_2;

    @Column(
            name = "city",
            nullable = true,
            length = 15
    )
    private String city;

    @Column(
            name = "postcode",
            nullable = true,
            length = 9
    )
    private String postcode;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(
          name = "user_id",
          referencedColumnName = "id"
    )
    private User user;
}
