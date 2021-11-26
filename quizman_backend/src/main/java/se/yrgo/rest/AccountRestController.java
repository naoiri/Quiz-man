package se.yrgo.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
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
}
