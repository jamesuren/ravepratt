//
//  raveprattViewController.m
//  Time&Tides
//
//  Created by Ngozi Okoro on 7/14/14.
//  Copyright (c) 2014 RavePratt. All rights reserved.
//

#import "raveprattViewController.h"

@implementation raveprattViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
    [self loadRequestFromString:@"http://10.1.2.21:3000"];
    NSLog(@"HERE!");
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)loadRequestFromString:(NSString*)urlString
{
    NSURL *url = [NSURL URLWithString:urlString];
    NSURLRequest *urlRequest = [NSURLRequest requestWithURL:url];
    [self.webView loadRequest:urlRequest];
}

@end
