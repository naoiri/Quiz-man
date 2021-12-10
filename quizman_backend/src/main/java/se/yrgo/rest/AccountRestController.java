package se.yrgo.rest;

import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.yrgo.data.AccountRepository;
import se.yrgo.domain.Account;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class AccountRestController {

    @Autowired
    private AccountRepository data;

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
    @PutMapping("/accounts/{id}")
    public ResponseEntity<Account>getId(@PathVariable(value = "id") Long id,
         @RequestBody Account accountInfo) throws ResourceNotFoundException {
        Account account = (Account) AccountRepository.findId(id)
                .orElseThrow(() -> new
                        ResourceNotFoundException( "Player nor found by this id ::" + id));
        account.setEmail(accountInfo.getEmail());
        account.setPassword((accountInfo.getPassword()));
        account.setHighscore(accountInfo.getHighscore());
        final Account updateAccount = data.save(account);
        return ResponseEntity.ok(updateAccount);


    }
    @GetMapping("/accounts")
    public List<Account>getAccounts(){
        return AccountRepository.finndAll();

    }
    @GetMapping("/accounts/{id}")
    public ResponseEntity<Account>getId(@PathVariable(value = "id") Long id)
            throws ResourceNotFoundException {
        Account account = (Account) AccountRepository.findId(id)
                .orElseThrow(() -> new
                        ResourceNotFoundException( "Player not found by this id ::" + id));
        return ResponseEntity.ok().body(account);

    }
    @DeleteMapping("(accounts/{id}")
    public Map<String, Boolean> deleteAccount(@PathVariable(value = "id") Long accountId)
        throws ResourceNotFoundException {
        Account account= (Account) AccountRepository.findId(accountId)
                .orElseThrow(() -> new ResourceNotFoundException("Player not found by this id :: " + accountId));
                data.delete(account);
                Map<String, Boolean> response = new HashMap<>();
                response.put("deleted" , Boolean.TRUE);
                return response;
    }





}
