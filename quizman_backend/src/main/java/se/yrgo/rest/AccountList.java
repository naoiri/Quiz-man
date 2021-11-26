package se.yrgo.rest;

import se.yrgo.domain.Account;

import java.util.List;

public class AccountList {

    private List<Account> accounts;

    public AccountList() {};

    public AccountList(List<Account> accounts) {
        this.accounts = accounts;
    }

    //@XmlElement(name="vehicle")
    public List<Account> getAccounts() {
        return accounts;
    }

    public void setAccounts(List<Account> accounts) {
        this.accounts = accounts;
    }

}
