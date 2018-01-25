var Company = require('../models/company');

module.exports = function(router) {

    // Adding New Company
    router.post('/companies/add', function(req, res) {
        var company = new Company({
            name: req.body.name,
            earnings: req.body.earnings,
            parent: req.body.parent
        });

        if (req.body.name == null || req.body.name == '') {
            res.json({ success: false, message: 'You must enter name of the company' });
        } else if (req.body.earnings == null || req.body.earnings == '') {
            res.json({ success: false, message: 'You must enter earnings of the company' });
        } else {
            company.save(function(err) {
                if (err) {
                    res.json({ success: false, message: 'Company already exist' });
                } else {
                    res.json({ success: true, message: 'Company create' });

                    // Add child to children list in parent company.

                    Company.findOne({ name: req.body.parent }, function(err, found) {
                        if (req.body.parent == undefined) {
                            return;
                        } else {

                            // Push to the array
                            found.children.push({
                                name: req.body.name,
                                earnings: req.body.earnings
                            });

                            found.save(function(err) {
                                if (err) {
                                    console.log('ERROR!');
                                } else {
                                    return;
                                }
                            })
                        }
                    });
                }
            })
        }
    });


    // Getting All Companies
    router.get('/companies', function(req, res) {
        Company.find({}, function(err, data) {
            if (err) {
                res.send('Error');
            } else {
                res.send(data);
            }
        })
    });

    // Getting Company by Id
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

    // Updating Company by Id
    router.put('/companies/:id', function(req, res) {
        var id = req.params.id;
        var obj = req.body;

        // VERY DANGEROUS CODE!!!
        // Update children in parent company. But it doesn't works correct.
        Company.findOne({ _id: req.params.id }, function(err, found) {
            Company.findOne({ name: found.parent }, function(err, res) {

                var arr = res.children;

                // Function for find
                function find(arr) {
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i].name == found.name) {
                            arr[i].name = obj.name;
                            arr[i].earnings = obj.earnings;
                        }
                    }
                }
                find(arr);

                res.save(function(err) {
                    if (err) {
                        console.log('ERROR!');
                    } else {
                        return;
                    }
                });
            });
        });

        Company.findByIdAndUpdate(id, { name: obj.name, earnings: +obj.earnings },
            function(err) {
                if (err) {
                    res.json({ success: false, message: 'Error' });
                    return;
                }
                res.json({ success: true, message: 'Updated' });
            })
    });

    // Deleting Company by Id
    router.delete('/companies/:id', function(req, res) {
        var id = req.params.id;

        // Company.findOne({ _id: req.params.id }, function(err, found) {
        //     Company.findOne({ name: found.parent }, function(err, res) {
        //
        //         var arr = res.children;
        //
        //         function find(arr) {
        //             for (var i = 0; i < arr.length; i++) {
        //                 if (arr[i].name == found.name) {
        //                     arr.splice(i, 1);
        //                 }
        //             }
        //         }
        //         find(arr);
        //
        //         res.save(function(err) {
        //             if (err) {
        //                 console.log('ERROR!');
        //             } else {
        //                 return;
        //             }
        //         });
        //     });
        // });

        Company.findByIdAndRemove(id, function(err) {
            if (err) {
                res.json({ success: false, message: 'Error' });
                return;
            }
            res.json({ success: true, message: 'Deleted' });
        });
    });

    return router;
};