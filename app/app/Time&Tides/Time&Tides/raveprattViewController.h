//
//  raveprattViewController.h
//  Time&Tides
//
//  Created by Ngozi Okoro on 7/14/14.
//  Copyright (c) 2014 RavePratt. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface raveprattViewController : UIViewController

@property (weak, nonatomic) IBOutlet UIWebView *webView;

- (void)loadRequestFromString:(NSString*)urlString;

@end
