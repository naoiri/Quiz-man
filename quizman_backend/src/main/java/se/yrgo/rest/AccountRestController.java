package se.yrgo.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import se.yrgo.data.AccountRepository;
import se.yrgo.domain.Account;

import java.util.List;

@RestController
public class AccountRestController {

    @Autowired
    public AccountRepository data;

    @RequestMapping("/accounts")
    public AccountList allAccounts(){
        List<Account> accounts = data.findAll();
        return new AccountList(accounts);
    }

    @RequestMapping(value = "/accounts", method = RequestMethod.POST)
    public ResponseEntity createUser(@RequestBody Account account) {
        data.save(account);
        return new ResponseEntity<>(account, HttpStatus.CREATED);
    }

}
