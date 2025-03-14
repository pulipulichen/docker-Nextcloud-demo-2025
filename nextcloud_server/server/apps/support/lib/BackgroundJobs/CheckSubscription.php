<?php

declare(strict_types=1);
/**
 * @copyright Copyright (c) 2018 Morris Jobke <hey@morrisjobke.de>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\Support\BackgroundJobs;

use OCA\Support\Service\SubscriptionService;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\BackgroundJob\TimedJob;
use OCP\IConfig;

class CheckSubscription extends TimedJob {
	public function __construct(
		ITimeFactory $factory,
		private readonly IConfig $config,
		private readonly SubscriptionService $subscriptionService,
	) {
		parent::__construct($factory);
		// Run every 5 minutes
		$this->setInterval(60 * 5);
	}

	public function run($argument) {
		$lastCheck = $this->config->getAppValue('support', 'last_check', 0);
		// renew subscription info every 23h
		if (time() - $lastCheck > 23 * 60 * 60) {
			$this->subscriptionService->renewSubscriptionInfo(false);
			$this->subscriptionService->checkSubscription();
		}
	}
}
