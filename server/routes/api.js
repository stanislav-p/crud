var Company = require('../models/company');

module.exports = function(router) {

    router.post('/add', function(req, res) {
        var company = new Company();
        company.name = req.body.name;
        company.earnings = req.body.earnings;

        if (req.body.name == null || req.body.name == '') {
            res.json({ success: false, message: 'You must enter name of the company' });
        } else if (req.body.earnings == null || req.body.earnings == '') {
            res.json({ success: false, message: 'You must enter earnings of the company' });
        } else {
            company.save(function(err) {
                if (err) {
                    res.json({ success: false, message: 'Company already exist!' });
                } else {
                    res.json({ success: true, message: 'Company create' });
                }
            })
        }
    });

    router.get('/companies', function(req, res) {
        Company.find({}, function(err, data) {
            if (err) {
                res.send('Error');
            } else {
                res.send(data);
            }
        })
    });

    router.get('/companies/:id', function(req, res) {
        var id = req.params.id;
        Company.findOne({ _id: id }, function(err, data) {
            if (err) {
                res.send('Error');
                return;
            } else {
                res.send(data);
            }
        })
    });

    router.put('/companies/:id', function(req, res) {
        var id = req.params.id;
        var obj = req.body;

        Company.findByIdAndUpdate(id, { name: obj.name, earnings: obj.earnings },
            function(err) {
                if (err) {
                    res.send('Error');
                    return;
                }
                res.send('Updated');
            })
    });

    router.delete('/companies/:id', function(req, res) {
        var id = req.params.id;
        Company.findByIdAndRemove(id, function(err) {
            if (err) {
                res.send('Error');
                return;
            }
            res.send('Deleted');
        });
    });

    return router;
};