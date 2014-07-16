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
	
    
    [self loadRequestFromString:@"http://timeandtides.meteor.com/"];
    
    _webView.scrollView.scrollEnabled = NO;
    _webView.scrollView.bounces = NO;
    
    
    
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
