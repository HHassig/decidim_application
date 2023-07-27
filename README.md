# Extended Family

## The Vision
I wanted to create a community centered around something that most, if not all, people are involved in. That is a family, and this includes an extended family.
On this iteration of Decidim, a family unit can organize all aspects of their lives and schedules, including:
* Organize all aspects of family events (Thanksgiving, Christmas, holidays)
* Manage household chores
* Vote on evening/weekend activities (Games, movies, etc.)
* Share photos (Sporting events, holidays, weekend trips, etc.)
* Propose leadership/structural changes
* More

## My Experience
Installation of Decidim seemed straightforward, but I needed a bit of help with two issues that I found to be not very well-documented. I ultimately got enough help and clarity from the community’s matrix.org chat-room, but feel that I should have been able to solve these issues from documentation or previously reported issues.
The two issues were as follows:

### Postgres Setup
While following the installation steps on a fresh Ubuntu 22.04.1 install, I encountered the following error:
```could not change directory to "/home/user": Permission denied``` from the command ```$ sudo -u postgres psql -c "CREATE USER decidim_app WITH SUPERUSER CREATEDB NOCREATEROLE PASSWORD 'thepassword'```

Ultimately, I had to change permissions with ```$ chmod og+rX /home /home/user``` which was an easy fix, but isn’t documented anywhere.

### Webpacker
Regardless of installing on a fresh Ubuntu install or OSX, the next error was inevitable:
```Webpacker can't find decidim_dev.css...```

There is quite a bit of documentation on this, in the form of a GitHub repo issues ([8528](https://github.com/decidim/decidim/issues/8528) and [10981](https://github.com/decidim/decidim/issues/10981)), neither of which solved my problem(s).
The following terminal commands did:
```
$ rm -rf node_modules public/decidim-packs package-lock.json
$ npm install
$ bin/rails assets:precompile
$ bundle exec rake assets:precompile
$ bundle exec rake webpacker:compile
$ rm -rf public/decidim-packs
$ rm bin/yarn yarn.lock
$ bundle exec rake decidim:upgrade
$ bundle exec rake webpacker:compile
```
Note: The above commands can likely be condensed.

### Babel
After fixing the webpacker issue, a minor issue presented itself, noted and solved [here](https://github.com/decidim/decidim/issues/10993).

## What Worked
Creating, migrating, and seeding went flawlessly: ```$ bin/rails db:create db:migrate db:seed```

I was able to get Decidim working on both OSX and Ubuntu.

The admin panel is straight-forward, intuitive, and user-friendly. Great for those with no coding background.

Installing the two modules recommended from the test ([Decidim::AlternativeLanding](https://github.com/Platoniq/decidim-module-alternative_landing) and [Decidim::DecidimAwesome](https://github.com/decidim-ice/decidim-module-decidim_awesome)) was easy. As simple as adding to the Gemfile and bundling in the terminal.

I went ahead and added the [comment](https://github.com/decidim/decidim/tree/develop/decidim-comments) and [blog](https://github.com/decidim/decidim/tree/develop/decidim-blogs) modules as well, as I feel these would be well-utilized in a family-based organization.

## What Didn't Work

### Sending Email
I tried setting up email via several different SMTP servers to no avail. To bypass this, I changed the number of days grace period a new user has to verify their account in the /config/initializers/decidim.rb to ```config.unconfirmed_access_for = 1000.days```

### Assemblies
I was unable to delete every assembly in the admin panel. There were always at least two assemblies in the view, and I was unable to find them in the admin panel.

### Steep Learning Curve for Customization
There appears to be a lot of legwork to fully customize a Decidim install, and a lot of learning is required to know which elements are being changed and where to change said element. This is good for non-developers, but it often feels like extra steps to change an image or text.

### Production
Deploying my Decidim application to both Fly and Heroku failed. On Heroku, I had to downgrade to [stack-20](https://devcenter.heroku.com/articles/heroku-20-stack), and deploying still failed. As this was outside of the scope of this test, I did not pursue it, but it wasn’t as straightforward as I’d expect. My next steps would be to check the [documentation](https://docs.decidim.org/en/v0.27/install/#_deploy).

## Screenshots
![Landing Page](https://i.imgur.com/L1LBtpA.png)
![Help](https://i.imgur.com/zv5c4Op.png)
![Processes](https://i.imgur.com/mQVdeS4.png)
![Admin Panel](https://i.imgur.com/U2H5TSb.png)
![Decidim Awesome](https://i.imgur.com/ZGwLVi3.png)
![Webpacker Error](https://i.imgur.com/RxFEEjg.png)

## About
This is a [Decidim](https://github.com/decidim/decidim) installation test-run in accordance with a test-task.
