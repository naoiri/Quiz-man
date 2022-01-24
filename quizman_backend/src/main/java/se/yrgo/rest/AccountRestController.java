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

    @RequestMapping(value = "/accounts/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Account> updateAccount(@PathVariable("id") long id, @RequestBody Account account) {
        Optional<Account> accountData = data.findById(id);

        if (accountData.isPresent()) {
            Account updatedAccount = accountData.get();
            updatedAccount.setEmail(account.getEmail());
            updatedAccount.setPassword(account.getPassword());
            updatedAccount.setHighscore(account.getHighscore());
            return new ResponseEntity<>(data.save(updatedAccount), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(value = "/accounts/{id}/{highscore}", method = RequestMethod.PATCH)
    public ResponseEntity<Account> updateHighscore(@PathVariable Long id, @PathVariable int highscore) {

        Account account = data.findById(id).get();
        if(account.getHighscore() < highscore){
            account.setHighscore(highscore);
        }
        return new ResponseEntity<Account>(data.save(account), HttpStatus.OK);

    }


}
