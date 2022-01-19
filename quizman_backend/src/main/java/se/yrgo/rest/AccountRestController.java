package se.yrgo.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.yrgo.data.AccountRepository;
import se.yrgo.domain.Account;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
public class AccountRestController {

    @Autowired
    private AccountRepository data;

    @RequestMapping("/accounts")
    public AccountList allAccounts() {
        List<Account> accounts = data.findAll();
        return new AccountList(accounts);
    }

    @RequestMapping(value = "/accounts", method = RequestMethod.POST)
    public ResponseEntity createUser(@RequestBody Account account) {
        data.save(account);
        return new ResponseEntity<>(account, HttpStatus.CREATED);
    }

    @RequestMapping("/accounts/{id}")
    public Optional<Account> getAccountByID(@PathVariable Long id) {
        Optional<Account> account = data.findById(id);
        return account;
    }
//
//    @GetMapping("/accounts/{email}")
//    public ResponseEntity<Account> findAccountByEmail(@PathVariable String email){
//        try{
//            Account account = data.findAccountByEmail(email);
//            if (account == null)
//            {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//            } else {
//
//            return new ResponseEntity<>(HttpStatus.OK);
//            }
//        }catch (Exception e) {
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }

   // public String findAccountByEmail(@PathVariable String email) {
        //return email;

    //}
}
